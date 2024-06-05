import { api } from '@api/axios';
import axios from 'axios';

const getAllPost = () => api.get('post');

const getPostById = (id: number) => api.get(`post/${id}`);

export { getAllPost, getPostById };
