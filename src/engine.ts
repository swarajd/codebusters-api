type QuestionSpec = {
  test1: string;
  test2: string;
};

type Renderable = {
  test3: string;
  test4: string;
};

function engine(question: QuestionSpec): Renderable {
  return {
    test3: "a",
    test4: "b"
  };
}

export default engine;
