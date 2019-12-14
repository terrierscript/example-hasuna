import React from "react"
import { act, render } from "@testing-library/react"
import renderer from "react-test-renderer"

test("Example Test", async () => {
  const { getByTestId } = render(<div data-testid="target">hello</div>)
  expect(getByTestId("target").textContent).toEqual("hello")
})

test("Snapshot", async () => {
  const tree = renderer
    .create(
      <div>
        <pre>hello</pre>
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
