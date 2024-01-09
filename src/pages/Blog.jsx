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
        <Button
          onClick={openModal}
          colorScheme="blue"
          className="absolute top-0 right-0 mt-4 mr-4"
        >
          Add Blog
        </Button>
        <Tabs variant="enclosed" className="mt-10">
          <TabList>
            <Tab>Blog Post</Tab>
            <Tab>PDF File</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
                {blogPosts.map((post, index) => (
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
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-4 mt-4">
                <iframe
                  src={Sundarampdf1}
                  title="PDF File"
                  allowFullScreen
                  className="flex-1 "
                />
                <iframe
                  src={Sundarampdf1}
                  title="PDF File"
                  allowFullScreen
                  className="flex-1"
                />
                <iframe
                  src={Sundarampdf1}
                  title="PDF File"
                  allowFullScreen
                  className="flex-1"
                />
                <iframe
                  src={Sundarampdf1}
                  title="PDF File"
                  allowFullScreen
                  className="flex-1"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Blog;
