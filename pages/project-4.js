import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Internship() {
  return (
    <div>
      <Navbar />

      <div className="pt-[5rem]">
        <img
          className="w-full h-[88vh] object-contain"
          src="assets/ecs.png"
          alt=""
        />

        <div className="mt-[2rem]">
          <h1 className="text-[4rem] uppercase leading-none">
            Enhancing IT Help Desk Efficiency with SharePoint and O365
          </h1>

          <div className="uppercase text-[2rem] opacity-[50%] flex space-x-[4rem] mt-[2vh]">
            <p>2023</p>
            <p>/</p>
            <p>Solo</p>
            <p>/</p>
            <p>ECS</p>
          </div>

          <div className="mt-[5vh] py-[10vh] px-[20vw] space-y-[5vh] text-xl ">
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Overview
              </h3>
              <p className="">
                In a solo endeavor at Thomas More IT Factory's Enterprise
                Content Services, I undertook a challenging project to
                revolutionize the IT Help Desk ticketing system using Microsoft
                O365, particularly SharePoint. The primary objective was to
                automate and streamline the ticket management process, catering
                to a help desk team handling around 120 tickets daily. This
                project was not just about leveraging SharePoint's document
                management capabilities but also about exploring its potential
                in automating internal business processes.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Implementation
              </h3>
              <p className="" id="role">
                The project required going beyond the standard features of O365
                and involved intricate customization of the SharePoint platform.
                The ticketing system I developed was designed to handle various
                aspects of ticket management efficiently:
              </p>
              <ul className="pt-5 space-y-3">
                <li>
                  <p className="font-bold">Ticket Creation and Management</p>
                  <p>
                    Enabled the creation of tickets with comprehensive details
                    like requestor’s information, category, priority, issue
                    status, and due date. The system also allowed for attaching
                    multiple files to tickets.
                  </p>
                </li>
                <li>
                  <p className="font-bold">Notification System</p>
                  <p>
                    Implemented a mechanism to keep the requestor updated about
                    the ticket status and deliver the final solution or response
                    upon completion.
                  </p>
                </li>
                <li>
                  <p className="font-bold">Ticket Organization</p>
                  <p>
                    Developed features for organizing tickets based on priority,
                    category, and due date, with color marking for urgent
                    issues.
                  </p>
                </li>
                <li>
                  <p className="font-bold">
                    Ticket Prioritization and Assignment
                  </p>
                  <p>
                    Enabled help desk staff to reprioritize and reassign
                    tickets, with individual ticket queues for each employee and
                    visibility into colleagues’ queues for collaborative
                    support.
                  </p>
                </li>
                <li>
                  <p className="font-bold">
                    Action Tracking and Advanced Search
                  </p>
                  <p>
                    Incorporated a system for recording actions taken on tickets
                    and an advanced search feature akin to Google, allowing for
                    efficient tracking and retrieval of ticket information.
                  </p>
                </li>
                <li>
                  <p className="font-bold">Advanced Customizations</p>
                  <p>
                    To enhance the system's capabilities, I integrated advanced
                    customizations using PowerPlatform, PNP, WebHooks, and SPFX.
                    Key features included:
                  </p>
                </li>
                <li className="ml-5">
                  <p className="font-bold">Automatic Ticket Generation</p>
                  <p>
                    Developed a feature to generate tickets automatically from
                    emails sent to a shared mailbox.
                  </p>
                </li>
                <li className="ml-5">
                  <p className="font-bold">Knowledge Base Integration</p>
                  <p>
                    Built a knowledge base for addressing repetitive issues and
                    implemented a system for suggesting solutions based on
                    ticket tags and related articles.
                  </p>
                </li>
                <li className="ml-5">
                  <p className="font-bold">Asset Management Integration</p>
                  <p>
                    Integrated the ticketing system with an asset management
                    list to associate tickets with physical items, facilitating
                    better resource management.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Learning and Development
              </h3>
              <p className="">
                This project was a significant learning curve, deepening my
                understanding of SharePoint and O365 capabilities. I gained
                substantial experience in Power Automation, exploring its
                potential in creating a more dynamic and responsive ticketing
                system. The project also enhanced my skills in SharePoint
                customization, PowerPlatform tools, and understanding the
                nuances of automating business processes in a corporate
                environment.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Conclusion
              </h3>
              <p className="">
                The successful completion of this project marked a significant
                achievement in my solo development journey. It not only
                demonstrated the versatility of SharePoint and O365 in
                streamlining business processes but also underscored the
                importance of automation and efficient data management in modern
                IT help desk operations. The experience gained from this project
                is invaluable, providing me with a robust foundation in
                enterprise content services and the practical application of
                advanced BI tools..
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer className="mt-[20vh]" />
    </div>
  );
}

export default Internship;
