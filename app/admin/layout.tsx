interface Prop {
  children: React.ReactNode;
}

export default function NextLayout({ children }: Prop) {
  return <>{children}</>;
}
