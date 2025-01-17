const projectContainer = document.querySelector("#projects");
const projectPage = document.querySelector("#project-content");
const projectId = window.location.pathname.indexOf('project') > -1 ? parseInt(window.location.pathname.split(".")[window.location.pathname.split(".").length - 2].slice(-1)) : undefined;
const projectsLength = data.projects.length;
const navLeftAnchor = document.querySelector("#nav-left");
const navRightAnchor = document.querySelector("#nav-right");

// populate home page
projectContainer ? projectContainer.innerHTML = data.projects.map(
   project => 
   `
   <a href=${ project.url }>
				<table>
					<tr>
						<td class="featured-img">
							<img src=${ project.thumb } title="Large Scale Drawing" />
						</td>
					</tr>
					<tr>
						<td>
							<span>${ project.name }</span>
						</td>
					</tr>
				</table>
			</a>

   `).join('') : 0;

// populate project page
if (!isNaN(projectId))
projectPage ? projectPage.innerHTML = 
   // title
   `<h1>${data.projects[projectId-1].name}</h1>` +

   // main media
   `<img class="mainImg" src=${data.projects[projectId-1].mainImg} />
   <br />
   ` +

   // components
   data.projects
      .filter( project => project.id == projectId)[0]
      .componenets
      .map(componenet => 
         componenet.p 
            ? 
            `<p>
               ${ componenet.p.imgUrl 
                  ? `<img src=${ componenet.p.imgUrl } /><br />`
                  : "" }
               <span class="image-title">
                  ${ componenet.p.text }
               </span>
            </p>`
            : componenet.video 
               ? 
               componenet.video.p
                  ?  `<p>
                        <video controls poster=${ componenet.video.poster } src=${ componenet.video.src }>
                        <span class="image-title">
                           ${ componenet.video.text }
                        </span>
                     </p>`
                  : `<video controls poster=${ componenet.video.poster } src=${ componenet.video.src }>
                        <span class="image-title">
                           ${ componenet.video.text }
                        </span>`
               : componenet.audio
                  ? 
                  `<p>
                     <audio controls>
                        <source src=${ componenet.audio.src } type=${ componenet.audio.type } />
                     </audio>
                     <span class="image-title">
                        ${ componenet.audio.text }
                     </span>
                  </p>`
                  : `<></>`
      )
      .join('')
      : 0

navLeftAnchor 
   ? 
   projectId - 1 == 0 
      ? navLeftAnchor.href = `project_${projectsLength }.html`
      : navLeftAnchor.href = `project_${projectId - 1}.html`
   : 0;

navRightAnchor 
   ? 
   projectId  == projectsLength
      ? navRightAnchor.href = `project_${1}.html`
      : navRightAnchor.href = `project_${projectId + 1}.html`
   : 0;
