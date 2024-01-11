import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  Input,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { fireDB } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { DeleteIcon } from "@chakra-ui/icons";
import Sundarampdf1 from "../assets/Sundarampdf1.pdf";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBlogData, setNewBlogData] = useState({
    description: "",
    image: "",
    created_At: "",
  });
  console.log("blog post", blogPosts);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogCollection = collection(fireDB, "blogPosts");
      const snapshot = await getDocs(blogCollection);
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogPosts(postsData);
    };

    fetchBlogPosts();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlogData({ ...newBlogData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewBlogData({ ...newBlogData, image: URL.createObjectURL(file) });
  };

  const handleAddBlog = async () => {
    try {
      const blogCollection = collection(fireDB, "blogPosts");
      const newPostRef = await addDoc(blogCollection, {
        description: newBlogData.description,
        image: newBlogData.image,
        created_At: new Date().toLocaleDateString(),
      });

      const newPostData = { id: newPostRef.id, ...newBlogData };
      setBlogPosts([...blogPosts, newPostData]);
      closeModal();
    } catch (error) {
      console.error("Error adding blog post: ", error);
    }
  };

  const handleDeleteBlog = async (postId) => {
    try {
      const blogDocRef = doc(fireDB, "blogPosts", postId);
      await deleteDoc(blogDocRef);
      const updatedPosts = blogPosts.filter((post) => post.id !== postId);
      setBlogPosts(updatedPosts);
    } catch (error) {
      console.error("Error deleting blog post: ", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto relative">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Blog</ModalHeader>
            <ModalBody>
              <label>
                Description:
                <Textarea
                  name="description"
                  value={newBlogData.description}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Choose Image:
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleAddBlog}>
                Add Blog
              </Button>
              <Button onClick={closeModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <h2 className="text-4xl font-bold mb-8 text-gray-800">NGO Blog</h2>
        {/* <Button
          onClick={openModal}
          colorScheme="blue"
          className="absolute top-0 right-0 mt-4 mr-4"
        >
          Add Blog
        </Button> */}
        <Tabs variant="enclosed" className="mt-10">
          <TabList>
            <Tab>Blog Post</Tab>
            <Tab>PDF File</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="flex sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* {blogPosts.map((post, index) => (
                  <SimpleGrid
                    key={index}
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                  >
                    <Card>
                      <DeleteIcon
                        onClick={() => handleDeleteBlog(post.id)}
                        className="text-red-500 float-right cursor-pointer"
                      />

                      <Image src={post?.image} alt="Blog post" />
                      <CardBody>
                        <Text>{post?.description}</Text>
                        <Text>{post?.created_At}</Text>
                      </CardBody>
                    </Card>
                  </SimpleGrid>
                ))} */}
              </div>
            </TabPanel>
            <TabPanel>
  <div className="flex gap-4 mt-4">
    <iframe
      src={Sundarampdf1}
      title="PDF File"
      allowFullScreen
      className="w-full h-80 sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4"
    />
    <iframe
      src={Sundarampdf1}
      title="PDF File"
      allowFullScreen
      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4"
    />
    <iframe
      src={Sundarampdf1}
      title="PDF File"
      allowFullScreen
      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4"
    />
    <iframe
      src={Sundarampdf1}
      title="PDF File"
      allowFullScreen
      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4"
    />
    {/* Add more iframes as needed */}
  </div>
</TabPanel>


          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Blog;
