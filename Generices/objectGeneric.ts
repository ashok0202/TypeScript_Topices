// deno-lint-ignore-file


interface JWTverify{
    username:string,
    password:string
}

function getToken<T,U extends JWTverify>(valOne:T,valTwo:U):Object{
    return{
        valOne,
        valTwo
    }
}

const get=getToken(1,{
    username:"ashok",
    password:"a@123"
})
console.log(get);