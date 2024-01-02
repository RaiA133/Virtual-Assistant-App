import { Link } from '@inertiajs/react';

const Paginator = ({ meta }) => {
  const current = meta.current_page
  const prev = meta.links[0].url
  const next = meta.links[meta.links.length - 1].url
  return (
    <div className="flex justify-start items-center mt-5">
      <div className="join w-40">
        {prev && <Link className="join-item btn bg-base-100" href={prev}>«</Link>}
        <button className="join-item btn bg-base-100">Page {current}</button>
        {next && <Link className="join-item btn bg-base-100" href={next}>»</Link>}
      </div>
    </div>
  );
}

export default Paginator;