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
      }
  ];
  
  export default blogs;
  