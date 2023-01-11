async function getUsers() {
    try{
        const promiseResult = await fetch('http://randomuser.me/api/');
        console.log(promiseResult)
        const data = await promiseResult.json();
        console.log(data);
    } catch(error) {
        console.log(error)
    }
}


getUsers();
