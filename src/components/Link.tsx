const Link = ({ href, label }: { href: string; label: string }) => {
  return (
    <a target="_blank" className="text-blue underline" href={href}>
      {label}
    </a>
  );
};

export default Link;
