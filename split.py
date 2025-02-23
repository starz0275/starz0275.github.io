import re
import os
import logging

# 配置日志输出
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def extract_metadata(content):
    """
    提取文档中的元数据
    :param content: 文档内容
    :return: 元数据信息（标题、日期、标签）
    """
    metadata_pattern = r'---\n(title:.*)\n(date:.*)\n(tags:[\s\S]*?)\n---'
    metadata_match = re.search(metadata_pattern, content)
    if metadata_match:
        common_title = metadata_match.group(1)
        common_date = metadata_match.group(2)
        common_tags = metadata_match.group(3)
        return common_title, common_date, common_tags
    else:
        logging.error("未找到元数据信息。")
        return None, None, None

def split_entries(content):
    """
    按日期分割文档内容
    :param content: 文档内容（去除元数据后）
    :return: 日期和对应日记内容的列表
    """
    date_pattern = r'## (\d{4}年\d{1,2}月\d{1,2}日)'
    entries = re.split(date_pattern, content)[1:]
    return entries

def format_date(date_str):
    """
    将日期字符串（如 2024年11月18日）转换为 YYYY-MM-DD 00:00:00 格式
    :param date_str: 日期字符串
    :return: 格式化后的日期字符串
    """
    year, month, day = re.findall(r'\d+', date_str)
    return f"date: {year}-{month.zfill(2)}-{day.zfill(2)} 00:00:00"

def create_new_file(target_directory, common_title, common_date, common_tags, date, entry_content):
    """
    创建新的 Markdown 文件
    :param target_directory: 目标目录
    :param common_title: 公共标题
    :param common_date: 公共日期
    :param common_tags: 公共标签
    :param date: 日记日期
    :param entry_content: 日记内容
    """
    title = f"J🕊️{date}"
    filename = f"{title}.md"
    full_path = os.path.join(target_directory, filename)

    # 生成新的日期字段
    new_date = format_date(date)

    new_content = f"---\n{common_title.replace('J🕊️', title)}\n{new_date}\n{common_tags}\n---\n\n## {date}\n{entry_content}"

    try:
        with open(full_path, 'w', encoding='utf-8') as new_file:
            new_file.write(new_content)
        logging.info(f"已生成文件: {full_path}")
    except Exception as e:
        logging.error(f"生成文件 {full_path} 时出错: {e}")

def main():
    # 指定目标目录
    target_directory = r"P:\code\mooda\source\_posts"

    # 如果目标目录不存在，则创建它
    if not os.path.exists(target_directory):
        try:
            os.makedirs(target_directory)
            logging.info(f"已创建目标目录: {target_directory}")
        except Exception as e:
            logging.error(f"创建目标目录 {target_directory} 时出错: {e}")
            return

    file_path = r'P:\code\mooda\J🕊️suki日记存档.md'
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
    except FileNotFoundError:
        logging.error(f"未找到文件: {file_path}")
        return
    except Exception as e:
        logging.error(f"读取文件 {file_path} 时出错: {e}")
        return

    # 提取公共元数据
    common_title, common_date, common_tags = extract_metadata(content)
    if common_title is None:
        return

    # 去除元数据部分
    metadata_pattern = r'---\n(title:.*)\n(date:.*)\n(tags:[\s\S]*?)\n---'
    content = re.sub(metadata_pattern, '', content).strip()

    # 按日期分割内容
    entries = split_entries(content)

    # 处理每个日期的内容
    for i in range(0, len(entries), 2):
        date = entries[i]
        entry_content = entries[i + 1].strip()
        create_new_file(target_directory, common_title, common_date, common_tags, date, entry_content)

if __name__ == "__main__":
    main()