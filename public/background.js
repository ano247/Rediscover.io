chrome.bookmarks.onCreated.addListener(newBookmarkCreated);

function newBookmarkCreated(id, bookmark) {
    //   console.log(id);
    //   console.log(bookmark);
    const urlInfo;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

        //      console.log(tabs);
        //      console.log(tabs[0].favIconUrl)
        urlInfo = tabs[0].favIconUrl;
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "popup-modal",
            bookmarkDeets: bookmark,
            faviconUrl: tabs[0].favIconUrl
        });
    });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: { ...bookmark, favIconUrl: urlInfo }
    }

    try {
        fetch('http://localhost:3001/savePost/', options)
    } catch (err) {
        throw new Error(err);
    }
}