const loginInfo = {
    token: 'xxxxxxx'
};

export default {
    'post|/api/login': option => {
        return {
            status: 200,
            message: 'success',
            data: loginInfo
        };
    }
};
