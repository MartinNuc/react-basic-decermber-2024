function wait(seconds) {
  return new Promise((resolve) => {
      setTimeout(() => resolve(), seconds * 1000);
  } );
}

async function countDown() {
  console.log(3);
  await wait(1);
  console.log(2);
  await wait(1);
  console.log(1);
  await wait(1);
  console.log('go!');

  return 'ahoj';
}

const result = await countDown();