import getJoke from "@/utils/getJokeByAxious";

export default async function RandJoke() {
    const joke = await getJoke();
    console.log(joke);

    return <div className="mt-5">{joke.data.value}</div>;
}
