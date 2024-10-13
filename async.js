function simplePromise(){
    return Promise.resolve("Akbar")
}

async function run(){
    const name = await simplePromise();
    console.info(name)
}

run();