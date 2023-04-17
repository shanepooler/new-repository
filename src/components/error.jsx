export default function Error({ message }) {
  return (
    <p className="my-4 rounded-3xl border-red-900 bg-red-50 px-2 py-4 font-bold text-red-500">
      {message}
    </p>
  );
}
