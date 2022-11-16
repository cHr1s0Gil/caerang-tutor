module.exports = {
    getCurrentTime: () => {
        const TIME_ZONE = 3240 * 10000;
        const d = new Date('2021-08-05 09:51:31');

        const date = new Date(+d + TIME_ZONE).toISOString().split('T')[0];
        const time = d.toTimeString().split(' ')[0];

        const currentTime = date + " " + time;
        return currentTime;
    }
};