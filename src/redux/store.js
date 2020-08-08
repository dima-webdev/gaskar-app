import shortid from "shortid";

const initialState = {
    projects: [
        {
            id: shortid(),
            title: 'Hadasaah Medical',
            begin: '01.01.2020',
            end: '11.11.2021',
            boss: 'Denis Konev',
            admin: 'Grosolim Limited',
        },
    ],
};

export default initialState;