
import { makeStoryGroup } from "../utils/story";


const group = makeStoryGroup("Options", module);


group.add("useResizeObserver", {
    app: require("./ReactUseResizeObserverApp").default,
    path: require.resolve("./ReactUseResizeObserverApp"),
});

group.add("useResizeObserver (Group)", {
    app: require("./ReactUseResizeObserverGroupApp").default,
    path: require.resolve("./ReactUseResizeObserverGroupApp"),
});

group.add("useResizeObserver (Individual Group)", {
    app: require("./ReactUseResizeObserverIndividualGroupApp").default,
    path: require.resolve("./ReactUseResizeObserverIndividualGroupApp"),
});


group.add("checkInput option", {
    app: require("./ReactCheckInputApp").default,
    path: require.resolve("./ReactCheckInputApp"),
});

group.add("Cursor is applied in viewer during dragging.", {
    app: require("./ReactViewContainerApp").default,
    path: require.resolve("./ReactViewContainerApp"),
});



group.add("First render with persisted data.", {
    app: require("./ReactPersistDataApp").default,
    path: require.resolve("./ReactPersistDataApp"),
});
