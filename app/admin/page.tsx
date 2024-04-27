'use client';

import useSWR from 'swr';

export default function Page() {
  const { data } = useSWR('/api/tenants/1783099162953428993', url => fetch(url).then(res => res.json()));
  console.log(data);
  return <></>;
}
