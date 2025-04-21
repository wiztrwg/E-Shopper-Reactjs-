function ListComment(props) {
  let { comments } = props;

  function Relay(e) {
    let idCha = e.target.id;
    props.getID(idCha);
    console.log("idCha", idCha);
  }

  function renderData() {
    console.log("binhluan", comments);

    if (comments.length > 0) {
      return comments.map((value) => {
        if (value.id_comment == 0) {
          return (
            <div key={value.id}>
              <li className="media">
                <a className="pull-left" href="#">
                  <img style={{ width: "121px", height: "86px" }}
                    className="media-object"
                    src={"http://localhost/web2m/laravel8/laravel8/public/upload/user/avatar/" + value.image_user}
                    alt=""
                  />
                </a>
                <div className="media-body">
                  <ul className="sinlge-post-meta">
                    <li>
                      <i className="fa fa-user"></i>
                      {value.name_user}
                    </li>
                    <li>
                      <i className="fa fa-clock-o"></i> 1:33 pm
                    </li>
                    <li>
                      <i className="fa fa-calendar"></i> {value.created_at}
                    </li>
                  </ul>
                  <p>{value.comment}</p>
                  <a
                    id={value.id}
                    className="btn btn-primary"
                    href="#"
                    onClick={Relay}
                  >
                    <i className="fa fa-reply"></i> Replay
                  </a>
                </div>
              </li>
              {comments.map((value2) => {
                if (value2.id_comment == value.id) {
                  return (
                    <li key={value2.id} className="media second-media">
                      <a className="pull-left" href="#">
                        <img style={{ width: "121px", height: "86px" }}
                          className="media-object"
                          src={"http://localhost/web2m/laravel8/laravel8/public/upload/user/avatar/" + value2.image_user}
                          alt=""
                        />
                      </a>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>
                            {value2.name_user}
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i>{" "}
                            {value2.created_at}
                          </li>
                        </ul>
                        <p>{value2.comment}</p>
                        <a
                          id={value2.id}
                          className="btn btn-primary"
                          href="#"
                          onClick={Relay}
                        >
                          <i className="fa fa-reply"></i> Replay
                        </a>
                      </div>
                    </li>
                  );
                }
              })}
            </div>
          );
        }
      });
    }
  }

  return (
    <div className="response-area">
      <h2>{comments.length} RESPONSES</h2>
      <ul className="media-list">{renderData()}</ul>
    </div>
  );
}

export default ListComment;