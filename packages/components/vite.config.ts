/*
 * @Author:
 * @Date: 2023-09-20 11:16:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-20 13:20:33
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),VueSetupExtend()],
});
