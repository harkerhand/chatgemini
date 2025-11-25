
// 实际的修改函数
const modifyElements = () => {
    targetSelector = '.bard-text';
    document.querySelectorAll(targetSelector).forEach(el => {
        if (el.dataset.modified !== 'true') { // 防止重复修改
            el.textContent = 'ChatGemini';
            el.style.cursor = 'pointer';
            el.title = 'Open Friend ChatGPT';
            el.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open('https://chatgpt.com/');
            });
            el.dataset.modified = 'true';
        }
    });
};

// 监听页面加载时的初始元素
modifyElements(); 

// 创建 MutationObserver 实例来监听后续的 DOM 变化
const observer = new MutationObserver((mutationsList, observer) => {
    // 在每次变化时都尝试修改元素
    modifyElements();
});

// 开始观察整个文档主体 (<body>)
observer.observe(document.body, { childList: true, subtree: true });