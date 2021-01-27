export default (props) => {
  return <div>this is about page: {props.id}</div>;
};

export async function getServerSideProps(context) {
  await sleepByPromise(4);
  return {
    props: { id: 1 }, // will be passed to the page component as props
  };
}

function sleepByPromise(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
