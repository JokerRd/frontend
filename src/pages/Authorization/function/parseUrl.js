export default function (url ) {
    let indexFirstAT = url.indexOf("access_token=") + 13;
    let indexLastAT = url.indexOf("&expires_in");
    let indexFirstUI = url.indexOf("user_id=") + 8;
    let indexLastUI = url.length;
    let accessToken = url.slice(indexFirstAT, indexLastAT);
    let userId = url.slice(indexFirstUI, indexLastUI);
    return {accessToken: accessToken, userId: userId};
}