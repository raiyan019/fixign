export default function Logo({ name }) {
  return (
    <a className="logo" href="/" aria-label={`${name} home`}>
      <img src="/images/logo.png" alt={name} />
    </a>
  );
}
