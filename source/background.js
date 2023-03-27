chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'copyMarkdownLinkImage',
    title: 'Copy ![Image](Url)',
    contexts: ['image']
  });
  chrome.contextMenus.create({
    id: 'copyMarkdownLink',
    title: 'Copy Markdown Link',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'copyMarkdownLinkImage' || info.menuItemId === 'copyMarkdownLink') {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: handleContextMenuClick,
      args: [info]
    }).catch((error) => {
      console.error('Error executing script:', error);
    });
  }
});

function handleContextMenuClick(info) {
  const isImage = info.mediaType === 'image';
  const srcUrl = info.srcUrl;
  const pageUrl = info.pageUrl;
  const pageTitle = document.title.split(' - ')[0] || '';

  if (isImage && srcUrl) {
    const imgElement = document.querySelector(`img[src="${srcUrl}"]`);
    const altText = imgElement ? imgElement.alt || '' : '';
    const markdownLink = `![${altText}](${srcUrl})`;
    navigator.clipboard.writeText(markdownLink);
  } else {
    const markdownLink = `[${pageTitle}](${pageUrl})`;
    navigator.clipboard.writeText(markdownLink);
  }
}
