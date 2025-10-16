
const firebaseConfig = {
  apiKey: "AIzaSyC4YZeG_t60GX_9EFfMZ9jFDCsLUHbnbz8",
  authDomain: "studycubs-official.firebaseapp.com",
  databaseURL: "https://studycubs-official-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studycubs-official",
  storageBucket: "studycubs-official.firebasestorage.app",
  messagingSenderId: "328675454729",
  appId: "1:328675454729:web:11ed5ab9607c0e4590edd8",
  measurementId: "G-EWPM4HZ7QP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

const blogList = document.getElementById('blog-list')?.getElementsByTagName('tbody')[0];
const addBlogForm = document.getElementById('add-blog-form');
const editBlogForm = document.getElementById('edit-blog-form');

// Fetch and display blogs on the index page
if (blogList) {
  const fetchBlogs = async () => {
    const querySnapshot = await db.collection('blogs').get();
    querySnapshot.forEach((doc) => {
      const blog = doc.data();
      const row = blogList.insertRow();
      row.innerHTML = `
        <td>${blog.title}</td>
        <td>${blog.author}</td>
        <td>${blog.status}</td>
        <td>
          <a href="edit.html?id=${doc.id}">Edit</a>
          <button onclick="deleteBlog('${doc.id}')">Delete</button>
        </td>
      `;
    });
  };
  fetchBlogs();
}

// Add a new blog
if (addBlogForm) {
  addBlogForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newBlog = {
      title: document.getElementById('title').value,
      slug: document.getElementById('slug').value,
      summary: document.getElementById('summary').value,
      content: document.getElementById('content').value,
      author: document.getElementById('author').value,
      imageUrl: document.getElementById('imageUrl').value,
      tags: document.getElementById('tags').value.split(',').map(tag => tag.trim()),
      status: document.getElementById('status').value,
      seoTitle: document.getElementById('seoTitle').value,
      seoDescription: document.getElementById('seoDescription').value,
      canonicalUrl: document.getElementById('canonicalUrl').value,
      ogImageUrl: document.getElementById('ogImageUrl').value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      comments: [],
    };
    await db.collection('blogs').add(newBlog);
    window.location.href = 'index.html';
  });
}

// Edit a blog
if (editBlogForm) {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');
  const blogRef = db.collection('blogs').doc(blogId);

  const fetchBlog = async () => {
    const doc = await blogRef.get();
    if (doc.exists) {
      const blog = doc.data();
      document.getElementById('blog-id').value = doc.id;
      document.getElementById('title').value = blog.title;
      document.getElementById('slug').value = blog.slug;
      document.getElementById('summary').value = blog.summary;
      document.getElementById('content').value = blog.content;
      document.getElementById('author').value = blog.author;
      document.getElementById('imageUrl').value = blog.imageUrl;
      document.getElementById('tags').value = blog.tags.join(', ');
      document.getElementById('status').value = blog.status;
      document.getElementById('seoTitle').value = blog.seoTitle;
      document.getElementById('seoDescription').value = blog.seoDescription;
      document.getElementById('canonicalUrl').value = blog.canonicalUrl;
      document.getElementById('ogImageUrl').value = blog.ogImageUrl;
    }
  };
  fetchBlog();

  editBlogForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updatedBlog = {
      title: document.getElementById('title').value,
      slug: document.getElementById('slug').value,
      summary: document.getElementById('summary').value,
      content: document.getElementById('content').value,
      author: document.getElementById('author').value,
      imageUrl: document.getElementById('imageUrl').value,
      tags: document.getElementById('tags').value.split(',').map(tag => tag.trim()),
      status: document.getElementById('status').value,
      seoTitle: document.getElementById('seoTitle').value,
      seoDescription: document.getElementById('seoDescription').value,
      canonicalUrl: document.getElementById('canonicalUrl').value,
      ogImageUrl: document.getElementById('ogImageUrl').value,
    };
    await blogRef.update(updatedBlog);
    window.location.href = 'index.html';
  });
}

// Delete a blog
const deleteBlog = async (id) => {
  if (confirm('Are you sure you want to delete this blog?')) {
    await db.collection('blogs').doc(id).delete();
    window.location.reload();
  }
};
