const blogs = [
    {
      id: 1,
      title: 'Top Most Useful Git Commands',
      summary: 'Learn the most commonly used Git commands for efficient version control and collaboration.',
      author: 'Neeraj Kumawat',
      date: 'April 15, 2025',
      content: `
        <p>If you're getting started with Git, here are some of the most commonly used commands that will help you track changes, manage branches, and collaborate efficiently.</p></br>
        <ol class="list-decimal ml-5">
          <li><strong>git status</strong><br> Checks the status of files in the current directory, indicating whether they are untracked, staged, or committed.<br> Ex: <code>git status</code></li></br>
          <li><strong>git add</strong><br> Adds files to the staging area.<br> Ex: <code>git add file_name</code><br> <code>git add .</code> (adds all untracked files)</li></br>
          <li><strong>git commit</strong><br> Commits files that are in the staging area.<br> Ex: <code>git commit -m "message"</code></li></br>
          <li><strong>git push</strong><br> Pushes committed changes to the remote repository.<br> Ex: <code>git push origin branch_name</code></li></br>
          <li><strong>git branch</strong><br> Displays or creates branches.<br> Ex: <code>git branch</code><br> To create: <code>git branch branch_name</code></li></br>
          <li><strong>git checkout</strong><br> Switches to a different branch.<br> Ex: <code>git checkout main</code></li></br>
          <li><strong>git merge</strong><br> Merges another branch into your current branch.<br> Ex: <code>git merge BugFix</code></li></br>
          <li><strong>git init</strong><br> Initializes a new Git repository.<br> Ex: <code>git init</code></li></br>
          <li><strong>git clone</strong><br> Clones a remote repository to your local machine.<br> Ex: <code>git clone repo_url.git</code></li></br>
          <li><strong>git pull</strong><br> Pulls the latest code from the remote repository.<br> Ex: <code>git pull origin branch_name</code></li></br>
        </ol>
        <h3>Complex Words:</h3></br>
        <ul class="ml-5">
          <li><strong>Staging area</strong> – A place where you decide which changes will be committed.</li>
          <li><strong>Untracked file</strong> – Files not being tracked by Git yet.</li>
        </ul>
      `,
    },
    {
        id: 2,
        title: 'Tools required for a full stack developer (MERN stack)',
        summary: 'Learn about the essential tools required for a full stack developer working with the MERN stack.',
        author: 'Neeraj Kumawat',
        date: 'April 15, 2025',
        content: `
          <p>As a full-stack developer working with the MERN stack, you'll need a set of tools that help you manage your code, test applications, manage databases, and deploy your applications effectively. Here are the most commonly used tools:</p></br>
          
          <ol class="list-decimal ml-5">
            <li><strong>Visual Studio Code</strong><br> A highly popular code editor for writing JavaScript, HTML, CSS, and more. It supports debugging, Git integration, and extensions like ESLint, Prettier, etc.</li></br>
            
            <li><strong>Node.js</strong><br> A JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript code on the server-side.</li></br>
            
            <li><strong>Postman</strong><br> A tool used for API testing and development. It helps you test RESTful APIs in your backend application.</li></br>
            
            <li><strong>Git</strong><br> A version control system that helps manage the source code history. It is crucial for collaborating in a team environment.</li></br>
            
            <li><strong>Docker</strong><br> A platform for developing, shipping, and running applications inside containers. It helps with maintaining consistency between environments.</li></br>
            
            <li><strong>MongoDB Compass</strong><br> A NoSQL database, typically used in the MERN stack for storing data in a flexible JSON format.</li></br>
          </ol>
        `,
      },
      {
        id: 3,
        title: 'My Life',
        summary: 'A personal reflection on life, routines, and lessons learned.',
        author: 'Neeraj Kumawat',
        date: 'April 16, 2025',
        content: `
          <p>This blog reflects my personal experiences — what I’ve done, what I’ve learned, and how I live my life.</p>
          <p>Life is all about the decisions you make — whether right or wrong, they shape your future.</p>
    </br>
          <h3><b>Q. How did I start my life?</b></h3>
          <ul class="list-disc ml-5">
            <li>I wake up and freshen up, just like anyone else.</li>
            <li>I look outside my room and observe life around me.</li>
            <li>I begin my day with 30 minutes of exercise.</li>
            <li>Then I do 15 minutes of meditation, just observing my thoughts.</li>
            <li>Both give me a fresh and clear start to the day.</li>
            <li>I listen to music from my Spotify playlist.</li>
            <li>I have breakfast and prepare for office.</li>
            <li>After returning from office (around 6:00 PM), I read a book I enjoy.</li>
            <li>I eat dinner around 8:30 PM.</li>
            <li>I work on my personal projects — something I truly love.</li>
            <li>Finally, I go to sleep.</li>
          </ul>
        </br>
          <p>This might sound like an ideal routine — and maybe it is. But I follow it as consistently as I can. You should create your own routine that fits you best.</p>
        </br>
          <h3><b>Some Thoughts from My Experience:</b></h3>
          
          <ul class="list-disc ml-5">
            <li>Don’t rely too much on others for decisions — be wise and independent.</li>
            <li>Pick a career you love — not one society chooses for you.</li>
            <li>Jobs can be lost at any time — always be prepared.</li>
            <li>Take care of your parents — they’ve sacrificed a lot for you.</li>
            <li>Make friends who will stand by you in hard times.</li>
            <li>Learn investing — I’m learning too, sometimes investing in equity.</li>
            <li>Mutual funds are a great starting point for beginners.</li>
          </ul>
        `
      },
      {
        id: 4,
        title: 'My GATE Journey: From Engineering to NIT Surathkal',
        summary: 'A complete story of how I transitioned from engineering college to NIT Surathkal through the GATE exam.',
        author: 'Neeraj Kumawat',
        date: 'April 19, 2025',
        content: `
          <p>My journey began in my third year of engineering when I started to seriously consider my future.</p></br>
          <p>I was deeply passionate about computer science and was determined to build my career in that field.</p></br>
          <p>I started exploring various opportunities related to computer science and soon learned about the GATE exam. This exam opens the doors to prestigious institutions like IITs and NITs for a master’s in Computer Science.</p></br>
          <p>I found the exam quite intuitive and logical, so I decided to prepare on my own at first. However, managing the vast array of subjects became a bit tedious.</p></br>
          <p>That’s when I discovered RavindraBabu Ravula’s GATE CS classes. His videos were engaging and made even complex topics accessible for someone without an extensive background in computer science.</p></br>
          <p>Impressed by his teaching style, I enrolled in his course for a duration of two years.</p></br>
          <p>Unfortunately, during my third year, I wasn’t eligible to take the exam, so I sat for my first GATE exam in the fourth year. I received a rank around 10,299, which was a modest start.</p></br>
          <p>Simultaneously, I prepared for campus placements. In my third year, I secured a placement at Infosys with a package of around 5 LPA; however, the job could have been in any location, and the selection was also based on an exam.</p></br>
          <p>Later, I joined a mid-sized service-based company called Intimetec, where I earned a package of around 4.5 LPA. One of the benefits of this job was its location—it was only 2.1 km away from my home.</p></br>
          <p>Despite working, my aspiration to attend a top-tier college never faded. I resumed my GATE preparation while working, focusing on revising and practicing since I had already covered my syllabus.</p></br>
          <p>Balancing the job with study was hectic, but I persevered. About a month ago, I resigned from my job to enter full preparation mode.</p></br>
          <p>I wasn’t expecting a major improvement and hoped only for a modest rank, perhaps enough to secure a spot at a decent NIT.</p></br>
          <p>However, the exam turned out to be slightly tougher this time, and I achieved a rank around 2378.</p></br>
          <p>During counseling, I assumed I might end up in a mid-level NIT rather than a top-tier one. In the spot round, I was pleasantly surprised to secure a seat in IT at NIT Surathkal. I am very happy with that outcome.</p></br>
          <p>I look forward to sharing more about my life at NIT Surathkal in future blogs.</p>
        `
      },
      {
        id: 5,
        title: 'My Journey to NITK Surathkal and Beyond',
        summary: 'From an unexpected GATE rank to life at NITK Surathkal and finally landing a TCS Prime offer, this is a story of resilience, growth, and faith.',
        author: 'Neeraj Kumawat',
        date: 'April 19, 2025',
        content: `
          <p>After clearing GATE, I got a seat at NITK Surathkal, which was totally unexpected for me. Even my parents didn’t know at first that I had gotten admission into a college in South India, so far from home. But once the seat was confirmed, they accepted it for the sake of my future.</p></br>
          
          <p>I started researching about NIT Surathkal—its location, food, and climate. I found online that the food was decent and the weather was normal. I went for counseling about five days before the classes were scheduled to begin. The process was slightly delayed, which left me confused, but I went ahead with my mom and dad.</p></br>
          
          <p>We traveled by Nizamuddin Express, which directly took us to Mangalore station, where the college is located. It was my first time going so far from home. Even during the train journey, I met many people from the South and found them to be very humble and kind.</p></br>
          
          <p>After reaching Mangalore, we searched for a hotel. An auto driver took us to one, and we stayed there for five days. Near the hotel, there was a restaurant that served both North Indian and South Indian food. I went for counseling and submitted all the required fees. I got admission and was allotted a room in Satpura Hostel. I started living there with a roommate who later became my friend.</p></br>
          
          <p>Initially, hostel life was tough for me, but over time, I adjusted. During this period, I was also struggling with frequent headaches. I consulted many doctors, but all of them said there was no medical issue. They believed I was overthinking a lot, which was causing stress.</p></br>
          
          <p>In the first semester, I got the lowest CGPA in my class—6.2. I was shocked because I had put in a lot of effort. In the second semester, I aimed for an 8.0 CGPA to compensate, but I couldn’t reach that target.</p></br>
          
          <p>By the time the third semester started, I realized that I couldn’t apply to many of the product-based companies I dreamed of, due to my low CGPA. I got very few interview opportunities. One company that came through our faculty was called Marelli. I was selected, but they weren’t sure about offering a full-time position, so I rejected the offer. Some of my friends did the same. I later realized that rejecting it was a mistake.</p></br>
          
          <p>Then came TCS, which conducted the NQT exam. Based on your score, you could be shortlisted for different roles—Ninja (3.5 LPA), Digital (7.0 LPA), or Prime (9.0+ LPA). I got shortlisted for the Prime role. I solved both coding questions in the NQT and cleared the interview. I received an offer of 11.5 LPA, which is the package for Prime roles for master’s students. I was really happy to finally have an offer, especially since companies were hiring very few people that year. I was scared, but with God's grace, I got the job.</p></br>
          
          <p>However, there was another twist. My joining got delayed by almost 6 months. Initially, I was supposed to join in July, but my final semester marksheet wasn’t released in time. Ironically, my marksheet was uploaded to the portal just a week after my joining got rescheduled.</p></br>
          
          <p>I was very tense and kept wondering when I’d finally get to join. I applied to other jobs as well, but I only got about two interviews. I started losing hope and questioned what my future would be. After working so hard, it was a tough phase.</p></br>
          
          <p>But someone once told me: <em>“If you work hard honestly, the results will come—maybe not immediately, but definitely.”</em> And that turned out to be true.</p></br>
          
          <p>Eventually, I received my joining date—30th January. I was so happy! The location was also quite convenient, just 3.5 hours away by train from my home. I got location Delhi.</p>
        `,
      }
      
      
  ];
  
  export default blogs;
  