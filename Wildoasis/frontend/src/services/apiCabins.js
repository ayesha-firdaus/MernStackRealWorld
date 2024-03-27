export async function apiCabin(url="", reqname="", givenData = null) {
    console.log(givenData)
    console.log(url)
    console.log(reqname)
    const reqobj = {
        method: reqname
    };

    if (reqname === "POST" || reqname === "PATCH") {
        reqobj.headers = {
            "Content-Type": "application/json"
        };

        if (givenData) {
            reqobj.body = JSON.stringify(givenData);
        }
    }

    const res = await fetch(url, reqobj);
    const data = await res.json();


    if (data.status === "fail" ||data.status === "error") {
        console.error(data);
        throw new Error(data.message);
    }
  

    return data; // Return an object with the key "cabin" and value as the array of cabin data
}
