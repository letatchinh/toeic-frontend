import { useEffect, useMemo, useRef, useState } from 'react';

import useSWR from 'swr';
import { get, sortBy } from 'lodash';
import { getSession } from 'next-auth/client';

import { getBaseURL } from 'lib/api/requester';

const MEDIA = {
  LG: 'LG',
  MD: 'MD',
  SM: 'SM',
};

const safeNumberSlides = (expectNumber, images) =>
  expectNumber <= images.length ? expectNumber : images.length;

export const useSlideResponsive = (images = [], md = 762, sm = 600) => {
  const imageLength = images.length;

  const mediaRef = useRef();

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: safeNumberSlides(3, images),
    slidesToScroll: safeNumberSlides(3, images),
  });

  const setLg = () => {
    mediaRef.current = MEDIA.LG;

    imageLength >= 3 &&
      setSettings(currentSetting => ({
        ...currentSetting,
        slidesToShow: safeNumberSlides(3, images),
        slidesToScroll: safeNumberSlides(3, images),
      }));
  };

  const setMd = () => {
    mediaRef.current = MEDIA.MD;

    imageLength >= 3 &&
      setSettings(currentSetting => ({
        ...currentSetting,
        slidesToShow: safeNumberSlides(2, images),
        slidesToScroll: safeNumberSlides(2, images),
      }));
  };

  const setSm = () => {
    mediaRef.current = MEDIA.SM;

    imageLength >= 2 &&
      setSettings(currentSetting => ({
        ...currentSetting,
        slidesToShow: 1,
        slidesToScroll: 1,
      }));
  };

  useEffect(() => {
    const mediaQueryMd = window.matchMedia(`(max-width: ${md}px)`);
    const onMdChange = e => {
      if (e.matches) {
        setMd();
      } else {
        setLg();
      }
    };

    mediaQueryMd.addListener(onMdChange);
    onMdChange(mediaQueryMd);

    const mediaQuerySm = window.matchMedia(`(max-width: ${sm}px)`);
    const onSmChange = e => {
      if (e.matches) {
        setSm();
      } else {
        mediaRef.current === MEDIA.MD ? setMd() : setLg();
      }
    };

    mediaQuerySm.addListener(onSmChange);
    onSmChange(mediaQuerySm);

    return () => {
      mediaQueryMd.removeListener(onMdChange);
      mediaQuerySm.removeListener(onSmChange);
    };
  }, []);

  const shouldShowNavigation =
    (mediaRef.current === MEDIA.LG && imageLength > 3) ||
    (mediaRef.current === MEDIA.MD && imageLength > 2) ||
    (mediaRef.current === MEDIA.SM && imageLength > 1);

  return [settings, shouldShowNavigation];
};

/**
 *
 * @param {*} queries
 * const queries = {
 *    xs: '(max-width: 320px)',
 *    md: '(max-width: 720px)',
 *    lg: '(max-width: 1024px)',
 * }
 * @returns
 */
export const useBreakpoint = queries => {
  const [queryMatch, setQueryMatch] = useState(null);

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(queries);

    // To check whether event listener is attached or not
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media].matches
        );
        return acc;
      }, {});
      //Setting state to the updated matches
      // when document either starts or stops matching a query
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches = {};
      keys.forEach(media => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      //Setting state to initial matching queries
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach(media => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    return () => {
      //If event listener is attached then remove it when deps change
      if (isAttached) {
        keys.forEach(media => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [queries]);

  return queryMatch;
};

export const useMergeState = initialState => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => ({ ...prevState, ...newState }));
  return [state, setMergedState];
};

const fetcher = (...args) => fetch(...args).then(res => res.json());
const fetchWithToken = async (...args) => {
  const session = await getSession();
  return fetch(...args, {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  }).then(res => res.json());
};

const swrConfig = {
  revalidateOnFocus: false,
};

export function usePackageLevels() {
  const { data, error } = useSWR(
    `${getBaseURL()}/api/v1/package-level?status=ACTIVE`,
    fetcher,
    swrConfig
  );

  return {
    packageLevels: data?.docs || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useSessionsOfDay() {
  const { data, error } = useSWR(
    `${getBaseURL()}/api/v1/wh-session-of-day?status=ACTIVE`,
    fetcher,
    swrConfig
  );

  return {
    sessionsOfDay: data?.docs || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useDistrict(cityCode) {
  const { data, error } = useSWR(
    cityCode ? `${getBaseURL()}/api/v1/city/${cityCode}/district` : null,
    fetcher,
    swrConfig
  );

  return {
    districts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useWard(districtCode) {
  const { data, error } = useSWR(
    districtCode
      ? `${getBaseURL()}/api/v1/district/${districtCode}/ward`
      : null,
    fetcher,
    swrConfig
  );

  return {
    wards: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useAddress() {
  const { data, error, mutate } = useSWR(
    `${getBaseURL()}/api/v1/me/address`,
    fetchWithToken,
    swrConfig
  );
  return {
    addresses: data, // primary address should appear first
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function usePharmacy() {
  const { data, error, mutate } = useSWR(
    `${getBaseURL()}/api/v1/pharmacy`,
    fetcher,
    swrConfig
  );

  return {
    pharmacies: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useProfile() {
  const { data, error, mutate } = useSWR(
    `${getBaseURL()}/api/v1/profile`,
    fetchWithToken,
    swrConfig
  );

  return {
    profile: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useCoupon(value) {
  const { data, error, mutate } = useSWR(
    value ? `${getBaseURL()}/api/v1/free-coupon` : null,
    fetchWithToken,
    swrConfig
  );

  return {
    coupons: data?.data || [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

export function useDraggableScroll(ref, options) {
  //options = {direction?: 'vertical' | 'horizontal' | 'both'};
  const { direction } = options;

  // The initial position (scroll progress and mouse location) when the mouse is pressed down on the element
  let initialPosition = { scrollTop: 0, scrollLeft: 0, mouseX: 0, mouseY: 0 };

  const mouseMoveHandler = ev => {
    if (ref?.current) {
      // Calculate differences to see how far the user has moved
      const dx = ev.clientX - initialPosition.mouseX;
      const dy = ev.clientY - initialPosition.mouseY;

      // Scroll the element according to those differences
      if (direction !== 'horizontal')
        ref.current.scrollTop = initialPosition.scrollTop - dy;
      if (direction !== 'vertical')
        ref.current.scrollLeft = initialPosition.scrollLeft - dx;
    }
  };

  const mouseUpHandler = () => {
    // Return to cursor: grab after the user is no longer pressing
    if (ref.current) ref.current.style.cursor = 'grab';

    // Remove the event listeners since it is not necessary to track the mouse position anymore
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  const onMouseDown = ev => {
    if (ref.current) {
      // Save the position at the moment the user presses down
      initialPosition = {
        scrollLeft: ref.current.scrollLeft,
        scrollTop: ref.current.scrollTop,
        mouseX: ev.clientX,
        mouseY: ev.clientY,
      };

      // Show a cursor: grabbing style and set user-select: none to avoid highlighting text while dragging
      ref.current.style.cursor = 'grabbing';

      // Add the event listeners that will track the mouse position for the rest of the interaction
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    }
  };

  return { onMouseDown };
}

export function ConvertPackageLevel({ data, locale }) {
  const result = useMemo(() => {
    const { name, description } = data;
    const [__price, ...__description] = description?.[locale]?.split(/\n/);
    return {
      name: name[locale],
      price: parseInt(__price).toLocaleString(),
      description: __description,
    };
  }, [data, locale]);

  return [result.name, result.price, result.description];
}
