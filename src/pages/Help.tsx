
export const HelpPage = () => {
    return (
        <div>
            <div className="header">Geo-Todos App</div>
            <div className="help">
                <p>Welcome to the Geo-Todos App! Here you can keep track of all your tasks, and separate them by location! Not at work?? Not a problem! You can leave your work at work and not even have to worry about those tasks at home!</p>
                <p>Once signed in, come back to the home page and you will see your dashboard. To the left you will see a list of all your given locations. Don't worry if you don't have any, simply click "Add Location" and enter the latitude and longitude and give it a name to get started!
                    The "Edit Locations" button gives you the chance to delete insignificant locations you no longer need. Clicking on a location will show all associated todos.
                </p>
                <p>Then you have the opportunity to add tasks for yourself for all locations you have! Simply click the "Create Todo" button on the right sidebar and you can add any tasks for any location, and if you need to add a new one on the fly, you can do that too!
                    Just give us a name and we will set up your current location to recieve tasks!
                </p>
                <p>The center of the page contains a list of all todos associated with the currently selected location. Todos in green are completed, and todos in blue are yet to be finished. Clicking on a todo will take you to the details page of the todo, where you can update the task, complete it, or even delete it if it is out of scope!</p>
                <p>We hope you enjoy, and may your productivity Soar beyond previous limits!</p>
            </div>
        </div>
    )
}