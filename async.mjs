function simplePromise(){
    return Promise.resolve("Akbar")
}

const name = await simplePromise();
console.info(name)