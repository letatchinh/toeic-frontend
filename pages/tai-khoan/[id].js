import React from 'react'

export default function Account({id}) {
    console.log(id,'id');
  return (
    <div>{id}</div>
  )
};
export async function getStaticPaths() {
    return {paths: [],fallback : true };
  }
export async function getStaticProps({params}) {

    return { props: {id:Math.random()*100000},revalidate : 3600 * 24 }
  }
  