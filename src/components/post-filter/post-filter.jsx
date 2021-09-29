import React from "react";
import MyInput from "../UI/input/my-input";
import MySelect from "../UI/my-select/my-select";

function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
                placeholder="Поиск..."
            ></MyInput>

            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => {
                    setFilter({
                        ...filter,
                        sort: selectedSort,
                    });
                }}
                defaultValue="Сортировка"
                options={[
                    { value: "title", name: "По названию" },
                    { value: "description", name: "По описанию" },
                ]}
            ></MySelect>
        </div>
    );
}

export default PostFilter;
