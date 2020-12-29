<script>
    export let document;
    import { DownloadCloudIcon } from 'svelte-feather-icons'
</script>

<div class = "card entry-card">
    <div class = "card-header">
        {document.title}
    </div>
    <div class = "card-body">
        <p>{document.description}</p>
        <p class = "url">
            <a href = "#">{document.url}</a>
        </p>
        <div class = "card-slider">
            <div class = "card-container">
                <div class = "slider-item">
                    <a href = "">Mentors</a>
                    <p>Mentors. mentee-profile-picture. Cagatay Cali. frontend</p>
                </div>
                <div class = "slider-item">
                    <a href = "">How It Works?</a>
                    <p>Active - Passive Mentorships. The best way to be a mentor </p>
                </div>
                <div class = "slider-item">
                    <a href = "">Mücahit Bircan</a>
                    <p>Mücahit Bircan - frontend, backend, mobile( react-native )</p>
                </div>
                <div class = "slider-item">
                    <a href = "">Mustafa B. Yildiz</a>
                    <p>Mustafa B. Yildiz. Mentor & Mentee Check out active mentorships ...</p>
                </div>
            </div>
        </div>
    </div>
    <div class = "card-footer">
        <button>
            <DownloadCloudIcon size="16"/>
        </button>
    </div>
</div>