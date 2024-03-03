const loadAllNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts)
    displayPost(posts)
}


const displayPost = (posts) => {
    posts.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('w-full', 'flex', 'gap-10', 'justify-between', 'rounded-3xl', 'items-center', 'p-5', 'bg-[#F3F3F5]', 'pl-3', 'm-3');
        div.innerHTML = `
    <div class="h-[72px] w-[100px] rounded-xl ml-4 mb-24 bg-[#FFFFFF] relative">
    <img src="${post.image}" alt="" class="rounded-xl">
    <div class="round-circle w-[18px] h-[18px] bg-[#10B981] rounded-full absolute left-[86px] bottom-[62px]">
    </div>
</div>
<div class="space-y-3">
    <div class="flex gap-5">
        <h6>#${post.category}</h6>
        <h6>Author : ${post.author.name}</h6>
    </div>
    <h2 class="text-xl font-bold mulish">${post.title}</h2>
    <p>${post.description}</p>
    <hr>
    
    <div class="flex items-center justify-between">
        <div class="flex gap-5">
            <a class="flex gap-2" href=""><svg width="22.500000" height="21.333374" viewBox="0 0 22.5 21.3334" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                        Created with Pixso.
                </desc>
                <defs/>
                <path id="Vector" d="M6.58334 6.58337L15.9167 6.58337M6.58334 11.25L13.5833 11.25M4.25 17.0834C3.32174 17.0834 2.4315 16.7146 1.77512 16.0582C1.11875 15.4019 0.75 14.5116 0.75 13.5834L0.75 4.25C0.75 3.32178 1.11875 2.43152 1.77512 1.77515C2.4315 1.11877 3.32174 0.75 4.25 0.75L18.25 0.75C19.1783 0.75 20.0685 1.11877 20.7249 1.77515C21.3812 2.43152 21.75 3.32178 21.75 4.25L21.75 13.5834C21.75 14.5116 21.3812 15.4019 20.7249 16.0582C20.0685 16.7146 19.1783 17.0834 18.25 17.0834L14.75 17.0834L11.25 20.5834L7.75 17.0834L4.25 17.0834Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <span>${post.comment_count}</span>
            </a>
            <a class="flex gap-2" href=""><svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                        Created with Pixso.
                </desc>
                <defs>
                    <clipPath id="clip23_1390">
                        <rect id="tabler-icon-eye" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <rect id="tabler-icon-eye" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip23_1390)">
                    <path id="Vector" d="M12.3501 15.6499C12.7877 16.0875 13.3812 16.3334 14 16.3334C14.6188 16.3334 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6189 16.3333 14C16.3333 13.3811 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6666 14 11.6666C13.3812 11.6666 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3811 11.6667 14C11.6667 14.6189 11.9125 15.2123 12.3501 15.6499ZM14 21C9.8 21 6.3 18.6666 3.5 14C6.3 9.33337 9.8 7 14 7C18.2 7 21.7 9.33337 24.5 14C21.7 18.6666 18.2 21 14 21Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
                </g>
            </svg>
            <span>${post.view_count}</span>
            </a>
            <a class="flex gap-2" href=""><svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                        Created with Pixso.
                </desc>
                <defs/>
                <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            <span>${post.posted_time}</span>
            </a>

        </div>
        <div class="flex p-5">
            <a href=""><svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                        Created with Pixso.
                </desc>
                <defs>
                    <clipPath id="clip57_425">
                        <rect id="email 1" width="28.000000" height="28.000000" fill="white" fill-opacity="0"/>
                    </clipPath>
                </defs>
                <rect id="email 1" width="28.000000" height="28.000000" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip57_425)">
                    <path id="Vector" d="M13.9998 0C6.26807 0 0.00012207 6.26819 0.00012207 13.9999C0.00012207 21.7314 6.26807 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26819 21.7315 0 13.9998 0ZM14.0001 4.91736L22.2847 10.0835L5.71545 10.0835L14.0001 4.91736ZM22.3879 18.333L22.3871 18.333C22.3871 19.1616 21.7155 19.833 20.887 19.833L7.11313 19.833C6.28452 19.833 5.61307 19.1615 5.61307 18.333L5.61307 10.4122C5.61307 10.3246 5.62201 10.2394 5.63657 10.1556L13.5521 15.0914C13.5618 15.0974 13.5721 15.1016 13.5821 15.1072C13.5926 15.1129 13.6032 15.1185 13.6139 15.1239C13.6698 15.1527 13.7274 15.176 13.7863 15.1912C13.7923 15.1929 13.7984 15.1936 13.8044 15.1949C13.869 15.2102 13.9344 15.2197 13.9998 15.2197L14.0003 15.2197C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.132 15.2104 14.1965 15.1949C14.2026 15.1935 14.2087 15.1929 14.2148 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3978 15.1185 14.4084 15.1129 14.4189 15.1072C14.4288 15.1016 14.4392 15.0974 14.4489 15.0914L22.3644 10.1556C22.379 10.2394 22.3879 10.3243 22.3879 10.4122L22.3879 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
                </g>
            </svg>
            </a>
        </div>
    </div>
</div>
    `
        const postContainer = document.getElementById('discus-card-container');
        postContainer.appendChild(div)

    });

}
// latest news load
const loadLatestNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json();
    // console.log(data)
    displayLatestNews(data)
}
// latest news display
const displayLatestNews = async (data) => {
    // console.log(data)
    data.forEach(news => {
        const latestNewsContainer = document.getElementById('latest-post-container');
        const card = document.createElement('div');
        card.classList.add('shadow-xl', 'card', 'w-96', 'bg-base-100');
        card.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${news.cover_image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="  card-body">
      <p>${news.author.posted_date ? news.author.posted_date : 'No publish date'}</p>
        <h2 class="card-title">${news.title}</h2>
        <p>${news.description }</p>
        <div class="flex gap-5">
        <img class="w-[44px] h-[44px] rounded-full" src="${news.profile_image}" alt="">
        <div>
            <h2 class="text-xl font-bold mulish">${news.author.name}</h2>
            <h6>${news.author.designation? news.author.designation:'unknown'}</h6>
        </div>
     </div>
        `
        latestNewsContainer.appendChild(card)
    })

}


loadLatestNews()
loadAllNews()
