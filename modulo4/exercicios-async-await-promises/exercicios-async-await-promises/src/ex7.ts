function ola () {
    console.log(`Olá!`)
}

const message = async():Promise<any> => {
    return new Promise (() => {
        setTimeout(ola, 5000);
    })
}
message();