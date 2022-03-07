import axios from "axios";

import MockAdapter from "axios-mock-adapter";

// mock testing user accounts
const users = [
    {
        userName: "mohsen",
        password: "demo",
        token: "mgfi5juf74j",
        role: 'admin'
    },
    {
        userName: "reza",
        password: "demo",
        token: "fgj8fjdfk43",
        role: 'user'
    }
];

const MockService = {
    init() {
        // this sets the mock adapter on the default instance
        const mock = new MockAdapter(axios);

        // mock login request
        mock.onPost("/login").reply(data => {
            const credential = JSON.parse(data.data);
            const found = users.find(user => {
                return (
                    credential.userName === user.userName &&
                    credential.password === user.password
                );
            });
            if (found) {
                return [200, found];
            }
            return [404, {errors: ["The login detail is incorrect"]}];
        });
    }
};

export default MockService;
