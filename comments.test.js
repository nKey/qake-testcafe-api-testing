fixture("API TESTING /COMMENTS JSONPLACEHOLDER");

test("GET COMMENTS BY NAME", async (testController) => {
    const response = await testController.request(
        "https://jsonplaceholder.typicode.com/comments?name=vero eaque aliquid doloribus et culpa"
    );
    const wantedGetComments = [
        {
            postId: 1,
            id: 5,
            name: "vero eaque aliquid doloribus et culpa",
            email: "Hayden@althea.biz",
            body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
        },
    ];
    const getComments = response.body;
    await testController.expect(response.status).eql(200);
    await testController.expect(getComments[0].name).eql(wantedGetComments[0].name);
    await testController.expect(getComments[0].body).eql(wantedGetComments[0].body);
    await testController.expect(getComments[0].email).eql(wantedGetComments[0].email);
});
