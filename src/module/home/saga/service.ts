import { api } from '@api/axios';
import axios from 'axios';

export const getAllPost = () => api.get('post');
