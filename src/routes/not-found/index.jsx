import Layout from '../../components/Layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="root-page flex flex-col justify-center items-center text-center text-lg">
        <p className="text-lg">
          صفحه مورد نظر پیدا نشد.
        </p>
        <p className="text-base">
          «گشتم نبود، نگرد نیست»
        </p>
      </div>
    </Layout>
  );
}
