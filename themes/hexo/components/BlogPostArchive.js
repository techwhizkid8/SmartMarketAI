import React from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
      <div>
        <div
          className="pt-16 pb-4 text-3xl dark:text-gray-300"
          id={archiveTitle}
        >
          {archiveTitle}
        </div>
        <ul>
          {posts.map(post => (
            <li
              key={post.id}
              className="border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-indigo-500 dark:hover:border-indigo-300 dark:border-indigo-400 transform duration-500"
            >
                <span className="text-gray-400">{post.date?.start_date}</span>{' '}
                &nbsp;&#8212;&nbsp;
              <div id={post?.date?.start_date}>
                <Link
                  href={`${BLOG.SUB_PATH}/${post.slug}`}
                  passHref
                  className="dark:text-gray-400  dark:hover:text-indigo-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600">
                  &#12304;{post.title}&#12305;
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BlogPostArchive
