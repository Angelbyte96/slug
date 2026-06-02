const CheckSlug = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="flex flex-col space-y-2">
      <h2>URL Check</h2>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default CheckSlug;
