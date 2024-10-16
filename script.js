document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userInfo = {};
    formData.forEach((value, key) => {
        userInfo[key] = value;
    });

    for (const [key, value] of Object.entries(userInfo)) {
        document.cookie = `${key}=${value}; max-age=${7 * 24 * 60 * 60}; path=/`;
    }

    document.getElementById('message').style.display = 'block';
    console.log('User Info submitted:', userInfo);
});
