import './style.css';
const pages = JSON.parse(import.meta.env.VITE_PAGES);

document.querySelector("#app").innerHTML = `
<main>
    <h1>Learn Web Development 2024</h1>
    <ol>
        ${pages
    .map((page) => `<li><a href="/${page}/">${page}</a></li>`)
    .join("\n")}
</ol>
</main>

<footer style="font-size: 0.875rem; color: #666">
<details>
    <summary>
        最近一次提交于 ${new Date(import.meta.env.VITE_GIT_COMMIT_DATE * 1000).toLocaleString()} : <a href="${import.meta.env.VITE_GIT_COMMIT_URL}">${import.meta.env.VITE_GIT_COMMIT_MESSAGE}</a>
    </summary>
    <pre>${import.meta.env.VITE_GIT_COMMIT_LOG}</pre>
</details>
</footer>
`;
