const loadAllNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts)
    displayPost(posts)

}


const displayPost = (posts) => {
    // document.getElementById('loading').classList.add('hidden');
    posts.forEach(post => {


        const div = document.createElement('div');
        div.classList.add('w-full', 'flex', 'md:flex-row', 'flex-col', 'gap-10', 'rounded-3xl', 'items-center', 'md:p-5', 'bg-[#F3F3F5]', 'pl-3', 'm-3');
        div.setAttribute('data-title', post.title)
        div.setAttribute('id', `${post.id}`)
        div.setAttribute('data-view-count', post.view_count)
        div.innerHTML = `
    <div class="h-[72px] w-[100px] rounded-xl ml-4 mb-24 bg-[#FFFFFF] relative">
    <img src="${post.image}" alt="" class="rounded-xl">
    <div class="round-circle w-[18px] h-[18px] ${post.isActive ? 'bg-green-500' : 'bg-red-500'}  rounded-full absolute left-[86px] bottom-[62px]">
    </div>
</div>
<div class="space-y-3 w-full">
    <div class="flex gap-5">
        <h6>#${post.category}</h6>
        <h6>Author : ${post.author.name}</h6>
    </div>
    <h2 class="text-xl font-bold mulish cart-title">${post.title}</h2>
    <p>${post.description}</p>
    <hr>
    
    <div class="flex items-center justify-between w-full">
        <div class="flex gap-5 w-full">
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
            <span class="w-full">${post.view_count}</span>
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
        <div class="flex p-5 discus-btn">
            <div class="box" onclick="handleClickOne(${post.id})" data-title="${post.title}" data-view-count="${post.view_count}">
            <svg width="27.999817" height="28.000000" viewBox="0 0 27.9998 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector" d="M13.9997 0C6.26794 0 0 6.26813 0 13.9998C0 21.7314 6.26794 28 13.9997 28C21.7314 28 27.9998 21.7314 27.9998 13.9998C27.9998 6.26813 21.7314 0 13.9997 0ZM13.9999 4.91742L22.2846 10.0835L5.71533 10.0835L13.9999 4.91742ZM22.3878 18.333L22.387 18.333C22.387 19.1616 21.7154 19.8331 20.8869 19.8331L7.11301 19.8331C6.28439 19.8331 5.61295 19.1615 5.61295 18.333L5.61295 10.4122C5.61295 10.3246 5.62189 10.2393 5.63644 10.1556L13.5519 15.0914C13.5616 15.0975 13.572 15.1016 13.582 15.1072C13.5925 15.113 13.6031 15.1186 13.6137 15.1239C13.6696 15.1527 13.7272 15.176 13.7861 15.1912C13.7922 15.1929 13.7982 15.1936 13.8043 15.195C13.8689 15.2102 13.9343 15.2197 13.9997 15.2197L14.0002 15.2197C14.0006 15.2197 14.0011 15.2197 14.0011 15.2197C14.0664 15.2197 14.1318 15.2105 14.1964 15.195C14.2025 15.1935 14.2086 15.1929 14.2146 15.1912C14.2734 15.176 14.3308 15.1527 14.387 15.1239C14.3976 15.1186 14.4083 15.113 14.4187 15.1072C14.4286 15.1016 14.4391 15.0975 14.4488 15.0914L22.3643 10.1556C22.3788 10.2393 22.3878 10.3243 22.3878 10.4122L22.3878 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
</svg>

            </div>
        </div>
    </div>
</div>
    `
        const postContainer = document.getElementById('discus-card-container');
        postContainer.appendChild(div)

    });
    handleLoading(false);

}
// handle click
const handleClickOne = (id) => {
    markAsReadHandle()
    data = document.getElementById(`${id}`)
    const titleData = data ? data.getAttribute('data-title') : null;
    const titlViewCount = data ? data.getAttribute('data-view-count') : null;
    appendData(titleData, titlViewCount)

}

const appendData = (titleData, titlViewCount) => {
    const container = document.getElementById('title-container');

    const card = document.createElement('div');
    card.classList.add('flex', 'justify-between', 'w-full', 'bg-[#FFFFFF]', 'p-6', 'rounded-xl', 'm-2')
    card.innerHTML = `
    <div>
                                <h2 class="w-[80%]">${titleData}</h2>
                            </div>
                            <div class="flex items-center gap-3">
                                <a href=""><svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector"
                                            d="M9.6001 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.5376 12.8999 6.1001C12.4623 5.6626 11.8688 5.41675 11.25 5.41675C10.6312 5.41675 10.0377 5.6626 9.6001 6.1001C9.16248 6.5376 8.91669 7.1311 8.91669 7.75C8.91669 8.3689 9.16248 8.96228 9.6001 9.3999ZM11.25 14.75C7.04999 14.75 3.54999 12.4166 0.75 7.75C3.54999 3.08325 7.04999 0.75 11.25 0.75C15.45 0.75 18.95 3.08325 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z"
                                            stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                            stroke-linejoin="round" />
                                    </svg>
                                </a>
                                <span>${titlViewCount}</span>
                            </div>
    `
    container.appendChild(card);

}


const markAsReadNumber = document.getElementById('mark-as-read');
let markAsReadValue = 0;
const markAsReadHandle = () => {
    markAsReadValue += 1;
    markAsReadNumber.innerText = (markAsReadValue)
}



// latest news load
const loadLatestNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json();
    displayLatestNews(data);
    loadingSpiner(true);
}
// latest news display
const displayLatestNews = async (data) => {
    data.forEach(news => {
        const latestNewsContainer = document.getElementById('latest-post-container');
        const card = document.createElement('div');
        card.classList.add('shadow-xl', 'card', 'md:w-96', 'w-full', 'bg-base-100');
        card.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${news.cover_image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="  card-body">
      <div class="flex gap-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
      <p>${news.author.posted_date ? news.author.posted_date : 'No publish date'}</p>
      </div>
        <h2 class="card-title">${news.title}</h2>
        <p>${news.description}</p>
        <div class="flex gap-5">
        <img class="w-[44px] h-[44px] rounded-full" src="${news.profile_image}" alt="">
        <div>
            <h2 class="text-xl font-bold mulish">${news.author.name}</h2>
            <h6>${news.author.designation ? news.author.designation : 'unknown'}</h6>
        </div>
     </div>
        `
        latestNewsContainer.appendChild(card)
    })
    // document.getElementById('loading').classList.add('hidden')
    loadingSpiner(false)
}



const loadingSpiner = (isloading) => {
    const loadingElement = document.getElementById('loading');

    if (isloading) {
        loadingElement.classList.remove('hidden');

        setTimeout(() => {
            loadingElement.classList.add('hidden');
        }, 2000);
    } else {
        loadingElement.classList.add('hidden');
    }
}

// handle search

const handleSearch = () => {
    const inputvalue= document.getElementById('search-box').value;
    loadNewsByCategory(inputvalue)
    loadingSpiner(true);


}

const loadNewsByCategory = async (inputvalue) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputvalue}`)
    const data = await response.json();
    const posts = data.posts;
    displayNewsByCategory(posts)
}

const displayNewsByCategory = (posts) => {
    const container=document.getElementById('discus-card-containerTwo');

    container.innerHTML = '';
    posts.forEach(post => {

        const div = document.createElement('div');
        div.classList.add('w-full', 'flex', 'md:flex-row', 'flex-col', 'gap-10', 'rounded-3xl', 'items-center', 'md:p-5', 'bg-[#F3F3F5]', 'pl-3', 'm-3');
        div.setAttribute('data-title', post.title)
        div.setAttribute('id', `${post.id}`)
        div.setAttribute('data-view-count', post.view_count)
        div.innerHTML = `
    <div class="h-[72px] w-[100px] rounded-xl ml-4 mb-24 bg-[#FFFFFF] relative">
    <img src="${post.image}" alt="" class="rounded-xl">
    <div class="round-circle w-[18px] h-[18px] ${post.isActive ? 'bg-green-500' : 'bg-red-500'}  rounded-full absolute left-[86px] bottom-[62px]">
    </div>
</div>
<div class="space-y-3 w-full">
    <div class="flex gap-5">
        <h6>#${post.category}</h6>
        <h6>Author : ${post.author.name}</h6>
    </div>
    <h2 class="text-xl font-bold mulish cart-title">${post.title}</h2>
    <p>${post.description}</p>
    <hr>
    
    <div class="flex items-center justify-between w-full">
        <div class="flex gap-5 w-full">
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
            <span class="w-full">${post.view_count}</span>
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
        <div class="flex p-5 discus-btn">
            <div class="box" onclick="handleClickOne(${post.id})" data-title="${post.title}" data-view-count="${post.view_count}">
            <svg width="27.999817" height="28.000000" viewBox="0 0 27.9998 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector" d="M13.9997 0C6.26794 0 0 6.26813 0 13.9998C0 21.7314 6.26794 28 13.9997 28C21.7314 28 27.9998 21.7314 27.9998 13.9998C27.9998 6.26813 21.7314 0 13.9997 0ZM13.9999 4.91742L22.2846 10.0835L5.71533 10.0835L13.9999 4.91742ZM22.3878 18.333L22.387 18.333C22.387 19.1616 21.7154 19.8331 20.8869 19.8331L7.11301 19.8331C6.28439 19.8331 5.61295 19.1615 5.61295 18.333L5.61295 10.4122C5.61295 10.3246 5.62189 10.2393 5.63644 10.1556L13.5519 15.0914C13.5616 15.0975 13.572 15.1016 13.582 15.1072C13.5925 15.113 13.6031 15.1186 13.6137 15.1239C13.6696 15.1527 13.7272 15.176 13.7861 15.1912C13.7922 15.1929 13.7982 15.1936 13.8043 15.195C13.8689 15.2102 13.9343 15.2197 13.9997 15.2197L14.0002 15.2197C14.0006 15.2197 14.0011 15.2197 14.0011 15.2197C14.0664 15.2197 14.1318 15.2105 14.1964 15.195C14.2025 15.1935 14.2086 15.1929 14.2146 15.1912C14.2734 15.176 14.3308 15.1527 14.387 15.1239C14.3976 15.1186 14.4083 15.113 14.4187 15.1072C14.4286 15.1016 14.4391 15.0975 14.4488 15.0914L22.3643 10.1556C22.3788 10.2393 22.3878 10.3243 22.3878 10.4122L22.3878 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
</svg>

            </div>
        </div>
    </div>
</div>
    `
    
    
    container.appendChild(div);
    
    })
    loadingSpiner(false)
    document.getElementById('discus-card-container').classList.add('hidden');

}





loadLatestNews()
loadAllNews()
