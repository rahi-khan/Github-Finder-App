const RepoItem = ({ repo: { html_url, name } }) => (
    <div className="card">
        <h3>
            <a href={html_url}>{name}</a>
        </h3>
    </div>
);

export default RepoItem;
