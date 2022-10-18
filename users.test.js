fixture("API TESTING /USERS JSONPLACEHOLDER");

test("POST USER", async (testController) => {
    const response = await testController.request({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "post",
        body: {
            name: "TestAPI",
            username: "lolp",
            email: "testapi@mail.com",
            address: {
                street: "Kattie Turnpike",
                suite: "Suite 198",
                city: "Lebsackbury",
                zipcode: "31428-2261",
                geo: {
                    lat: "-38.2386",
                    lng: "57.2232",
                },
            },
            phone: "88047-560",
            website: "qatime.com",
            company: {
                name: "Hoeger LLC",
                catchPhrase: "Centralized empowering task-force",
                bs: "target end-to-end models",
            },
        },
    });

    const wantedPostUser = {
        name: "TestAPI",
        username: "lolp",
        email: "testapi@mail.com",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
                lat: "-38.2386",
                lng: "57.2232",
            },
        },
        phone: "88047-560",
        website: "qatime.com",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
        },
    };
    const postUser = response.body;
    await testController.expect(response.status).eql(201);
    await testController.expect(postUser.name).eql(wantedPostUser.name);
    await testController.expect(postUser.username).eql(wantedPostUser.username);
    await testController.expect(postUser.email).eql(wantedPostUser.email);
    await testController.expect(postUser.address.street).eql(wantedPostUser.address.street);
    await testController.expect(postUser.address.suite).eql(wantedPostUser.address.suite);
    await testController.expect(postUser.address.city).eql(wantedPostUser.address.city);
    await testController.expect(postUser.address.zipcode).eql(wantedPostUser.address.zipcode);
    await testController.expect(postUser.address.geo.lat).eql(wantedPostUser.address.geo.lat);
    await testController.expect(postUser.address.geo.lng).eql(wantedPostUser.address.geo.lng);
    await testController.expect(postUser.phone).eql(wantedPostUser.phone);
    await testController.expect(postUser.website).eql(wantedPostUser.website);
    await testController.expect(postUser.company.name).eql(wantedPostUser.company.name);
    await testController.expect(postUser.company.catchPhrase).eql(wantedPostUser.company.catchPhrase);
    await testController.expect(postUser.company.bs).eql(wantedPostUser.company.bs);
});

test("PUT USER", async (testController) => {
    const response = await testController.request({
        url: "https://jsonplaceholder.typicode.com/users/3",
        method: "put",
        body: {
            name: "TestAPI",
            username: "lolp",
            email: "testapi@mail.com",
            address: {
                street: "Kattie Turnpike",
                suite: "Suite 198",
                city: "Lebsackbury",
                zipcode: "31428-2261",
                geo: {
                    lat: "-38.2386",
                    lng: "57.2232",
                },
            },
            phone: "88047-560",
            website: "qatime.com",
            company: {
                name: "Hoeger LLC",
                catchPhrase: "Centralized empowering task-force",
                bs: "target end-to-end models",
            },
        },
    });

    const wantedPostUser = {
        name: "TestAPI",
        username: "lolp",
        email: "testapi@mail.com",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
                lat: "-38.2386",
                lng: "57.2232",
            },
        },
        phone: "88047-560",
        website: "qatime.com",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
        },
    };
    const postUser = response.body;
    await testController.expect(response.status).eql(200);
    await testController.expect(postUser.name).eql(wantedPostUser.name);
    await testController.expect(postUser.username).eql(wantedPostUser.username);
    await testController.expect(postUser.email).eql(wantedPostUser.email);
    await testController.expect(postUser.address.street).eql(wantedPostUser.address.street);
    await testController.expect(postUser.address.suite).eql(wantedPostUser.address.suite);
    await testController.expect(postUser.address.city).eql(wantedPostUser.address.city);
    await testController.expect(postUser.address.zipcode).eql(wantedPostUser.address.zipcode);
    await testController.expect(postUser.address.geo.lat).eql(wantedPostUser.address.geo.lat);
    await testController.expect(postUser.address.geo.lng).eql(wantedPostUser.address.geo.lng);
    await testController.expect(postUser.phone).eql(wantedPostUser.phone);
    await testController.expect(postUser.website).eql(wantedPostUser.website);
    await testController.expect(postUser.company.name).eql(wantedPostUser.company.name);
    await testController.expect(postUser.company.catchPhrase).eql(wantedPostUser.company.catchPhrase);
    await testController.expect(postUser.company.bs).eql(wantedPostUser.company.bs);
});
