import fs from 'fs';
import path from 'path';
import {MENU} from 'lib/enums.js';

const contentDir = path.join(process.cwd(), 'content')

export function getNavJson() {
  const filePath = path.join(contentDir, `nav.json`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents);
}


const parseNav = (items) => {
  return items.map(item => {
    if(item.template == MENU.SUBMENU){
      return parseNav(item.items);
    }else{
      return item.post;
    }
  }).flat();
}


export function getNavPaths() {
  let { nav } = getNavJson();
  let paths = parseNav(nav).map(item => {
    return item.replace(/\.json$/, '').replace(/content\//, '');
  })

  return paths.map(path => {
    return {
      params: {
        slug: path.split('/')
      }
    }
  })
}

export function getDataForPath(navPath) {
  const filePath = path.join(contentDir, `${navPath}.json`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const jsonData = JSON.parse(fileContents);

  // Combine the data with the id and contentHtml
  return {
    path: navPath,
    ...jsonData
  }
}

